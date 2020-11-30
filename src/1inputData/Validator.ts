export const maxLength = (max: number, value: string) => {
    return value && value.length > max
}
export const minLength = (min: number, value: string) => {
    return value.length < min
}


export const isNumber = (value: string) => {
    // return Number(value) !== 'n'
}

export const validate = (value: any, min: number, max: number, name: string ) => {
    if (!value) {
        return 'Required'
    }

    if (!isFinite(value)) {
         return 'ok, try to enter the number'
    }

    if (minLength(min, value)) {
        return `Must be ${min} characters or more`
    }

    if(maxLength(max, value)){
        return `Must be ${max} characters or less`
    }

    if(name === 'date') {
        let nowDate = new Date();
        let yearNow = Number((nowDate.getFullYear()).toString().slice(0, 2));
        const monthCard = Number(value.slice(0, 2))
        const yearCard = Number(value.slice(2, 4))
        if (monthCard <= 31 && yearCard >= yearNow) {
            return ''
        } else {
            return 'maybe your card is expired'
        }
    }
    return ''
}
