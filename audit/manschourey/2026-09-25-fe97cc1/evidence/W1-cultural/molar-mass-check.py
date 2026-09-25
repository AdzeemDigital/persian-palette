# Recompute molar masses for the formulas stated in heritage-data.ts (IUPAC atomic weights via `chemicals`).
# Usage: python molar-mass-check.py  (needs `pip install chemicals==1.5.2`)
from chemicals.elements import molecular_weight, nested_formula_parser
cases = [
 ("isfahan-tiles-c2","turquoise","CuAl6(PO4)4(OH)8(H2O)4",813.5),
 ("isfahan-tiles-c3","basic copper acetate as written Cu(CH3COO)2·[Cu(OH)2]2","Cu(CH3COO)2(Cu(OH)2)2",370.2),
 ("isfahan-tiles-c3","neutral copper(II) acetate (CAS 142-71-2)","Cu(CH3COO)2",None),
 ("isfahan-tiles-c4","gold","Au",196.97),
 ("isfahan-tiles-c5","gypsum","CaSO4(H2O)2",172.17),
 ("isfahan-tiles-c6","Co3O4 (stated formula Co3O4 + C)","Co3O4",240.8),
 ("isfahan-tiles-c6","CoO (what CAS 1307-96-6 identifies)","CoO",None),
 ("isfahan-tiles-c1","lazurite, IMA formula x2 Na6Ca2(Si6Al6)O24S2","Na6Ca2Si6Al6O24S2",985.4),
 ("behzad-miniature-c1","cinnabar","HgS",232.66),
 ("behzad-miniature-c2","malachite","Cu2CO3(OH)2",221.12),
 ("behzad-miniature-c3","indigotin only (stated formula also includes lazurite)","C16H10N2O2",262.26),
 ("behzad-miniature-c4","carminic acid","C22H20O13",492.39),
 ("behzad-miniature-c5","gold only (stated formula also includes polysaccharides)","Au",196.97),
 ("behzad-miniature-c6","anhydroglucose repeat unit (stated formula is a polymer)","C6H10O5",162.14),
]
for cid, label, f, stated in cases:
    mw = molecular_weight(nested_formula_parser(f))
    diff = "" if stated is None else f"\tstated={stated}\tdiff={stated-mw:+.2f}"
    print(f"{cid}\t{label}\t{f}\tcomputed={mw:.2f}{diff}")
