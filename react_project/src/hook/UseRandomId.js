export const UseRandomId = (array = []) => {
    let id = ""

    for(let i = 0; i <= 8; i++) {
        let randomN = Math.round(Math.random() * 8)
        id = id + randomN

        
    }
    array.find((el) => {
            if(el.id === id){
                return UseRandomId(array)
            }else{
                return
            }
        })

        return id 
}