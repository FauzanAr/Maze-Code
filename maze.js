const S = 3

const maze = (S) => {
    S = 4*S-1 // Rumus dari maze
    let maze = '' // Variable untuk menyimpan maze
    let node = 0  // Varibale untuk menyimpan node jika genap maka akan menghilangkan '@' di posisi kolom: 1 dan jika ganjil di posisi kolom : kolom-1

    for (let index_baris = 0; index_baris < S; index_baris++) {
        for (let index_kolom = 0; index_kolom < S; index_kolom++) {
            if(index_kolom+1 != S){ // Kondisi untuk melihat apakah kolom tsb berada di akhir index_kolom
                if((index_baris%2 == 1 && index_kolom > 0) || (index_baris%2 == 0 && (node%2 == 0 && index_kolom == 1) || (node%2 == 1 && index_kolom == S-2))){
                    maze += ' '
                    node += index_baris%2 // Melakukan penambahan node untuk merubah posisi spasi
                } else {
                    maze +='@'
                }
            }else {
                maze += '@\n'
            }
        }
    }
    return maze;
}

console.log(maze(S))