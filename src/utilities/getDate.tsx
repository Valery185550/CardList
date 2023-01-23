export function getDate(str:string){
    let date = new Date(str);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day:string | number = date.getDate();
    switch(day){
        case 1:{
            day="1st";
            break;
        }
        case 2:{
            day="2nd";
            break;
        }
        case 3:{
            day="3rd";
            break;
        }
        default:{
            day=day+"th";
        }
    }
    
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    return `${month} ${day}, ${year}`;
}