function solution(today, terms, privacies) {
    const periodMap = new Map()
    terms.map(term => {
        const [type, period] = term.split(' ')
        periodMap.set(type, +period)
    })
     
    const answer = privacies.map((privacy, index) => {
        const [date, type] = privacy.split(' ')
        const formatedDate = new Date(date)
        
        formatedDate.setMonth(formatedDate.getMonth() + periodMap.get(type));
        return formatedDate <= new Date(today) ? index + 1 : null
     })
     
     return answer.filter(a => a)
} 