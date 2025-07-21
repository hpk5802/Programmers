function solution(video_len, pos, op_start, op_end, commands) {
    const vLen = +video_len.split(':').join('');
    const start = +op_start.split(':').join('');
    const end = +op_end.split(':').join('');
    let cPos = +pos.split(':').join('');
    
    if (cPos >= start && cPos <= end) cPos = end;
    
    commands.forEach(command => {  
        if (command === 'prev') {
            cPos = cPos - 10 < 10 ? 0 : cPos - 10;
            if (cPos % 100 >= 60) cPos -= 40;
        } else {
            cPos += 10;            
            if (cPos % 100 >= 60) cPos += 40;
            if (cPos > vLen) cPos = vLen;
        }
        
        if (cPos >= start && cPos <= end) cPos = end;
    })
    const formatted = cPos.toString().padStart(4,'0');
    return `${formatted.slice(0,2)}:${formatted.slice(2)}`
}