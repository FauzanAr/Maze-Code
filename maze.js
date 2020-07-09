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

const Nomer1 = (number) => {
    if(number%15 == 0){
        console.log('Fish Bash')
    }else if(number%5 == 0){
        console.log('bash')
    }else if(number%3 == 0){
        console.log('Fish')
    }
}

for (let i = 1; i<=30; i++){
    console.log(i)
    Nomer1(i);
}



const arr = [3,4,2,6,3,1,9,5,2,6,20,50,30,25,36]

const Nomer2 = (array) => {
    let swap = true
    let j = 0

    for (let i = 0; i < array.length - j ; i++) {
        for (let j = 0; j < array.length-i-1; j++) {
            if(array[j]>array[j+1]){
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
        }
    }

    return array;
}

console.log(Nomer2(arr))


const Nomer3 = (str) => {
    const str_split = str.split("")
    let newstr = '';
    const length = str_split.length

    for (let i = 0; i < length; i++) {
        newstr += str_split[length-i-1]
    }

    if (str === newstr) {
        return true
    }

    return false
}

console.log(Nomer3("hallo"))