export function extractErrors (object : any) : string[] {
    const err = object.error.errors;
    let erorrMessages : string[] = []

    for(let key in err){
        let field = key
        const messagesWithField = err[key].map((erorrMessage : string) => `${field} : ${erorrMessage}`)
        erorrMessages = erorrMessages.concat(messagesWithField) 
    }
    return erorrMessages
}