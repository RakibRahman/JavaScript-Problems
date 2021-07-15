function DNAStrand(dna) {
  let symbols = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  dna = dna.replace(/[ATGC]/g, (m) => symbols[m]);
  return dna;
}
console.log(DNAStrand("AAAC"));
console.log(DNAStrand("GTAT"));
