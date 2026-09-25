import chemicals, sys
from chemicals.identifiers import search_chemical, CAS_to_int
from chemicals.identifiers import check_CAS
print("chemicals", chemicals.__version__)
cas = ["7732-18-5","1302-85-8","1319-32-0","142-71-2","7440-57-5","10101-41-4","1307-96-6","1308-06-1","1344-48-5","12069-69-1","482-89-3","1260-15-5","1260-17-9","9000-01-5","9004-34-6","1309-37-1","1303-33-9","57455-37-5","7778-18-9","52503-64-7","6046-93-1","1317-39-1","12069-69-1"]
for c in cas:
    ok = check_CAS(c)
    try:
        r = search_chemical(c)
        print(f"{c}\tchecksum_ok={ok}\tname={r.common_name}\tformula={r.formula}\tMW={r.MW:.3f}\tpubchemCID={r.pubchemid}\tiupac={r.iupac_name}")
    except Exception as e:
        print(f"{c}\tchecksum_ok={ok}\tNOT_FOUND ({type(e).__name__})")
