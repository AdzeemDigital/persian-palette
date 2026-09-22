"""Package the local release without dependencies, logs, caches or session data."""
import hashlib
import json
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parent.parent
manifest = json.loads((root / 'docs/build-manifest.json').read_text(encoding='utf-8'))
artifact = root / manifest['artifact']
if hashlib.sha256(artifact.read_bytes()).hexdigest() != manifest['sha256']:
    raise SystemExit('Artifact hash differs from build manifest. Run npm run build first.')

files = [root / name for name in (
    'code_artifact.html', 'code_artifact_en.html', 'README.md', 'README.fa.md', 'LICENSE', 'THIRD_PARTY_NOTICES.md',
    'CONTRIBUTING.md', 'CODE_OF_CONDUCT.md', 'SECURITY.md', '.gitignore',
    'walkthrough.md', 'implementation_plan.md', 'package.json', 'package-lock.json',
    'release/persian-palette-core-3.0.0.tgz', 'release/manshour-studio-en.html',
)]
for directory in ('app', 'docs', 'scripts', 'tests', 'packages/core', '.github', 'archive/v2.1.0'):
    for path in (root / directory).rglob('*'):
        if path.is_file() and not any(part in {'node_modules', '__pycache__', '.git'} for part in path.parts):
            files.append(path)
target = root / 'release/manshour-studio-3.0.0.zip'
with ZipFile(target, 'w', compression=ZIP_DEFLATED, compresslevel=9) as bundle:
    for path in sorted(set(files)):
        bundle.write(path, path.relative_to(root).as_posix())
with ZipFile(target) as bundle:
    if bundle.testzip() is not None:
        raise SystemExit('Archive integrity check failed.')
    print(f'Packaged {len(bundle.namelist())} files; {target.stat().st_size:,} bytes.')
print(f'SHA-256: {hashlib.sha256(target.read_bytes()).hexdigest()}')
