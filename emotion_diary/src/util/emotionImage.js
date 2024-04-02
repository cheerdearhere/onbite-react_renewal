import emotion1 from "../assets/img/emotion1.png";
import emotion2 from "../assets/img/emotion2.png";
import emotion3 from "../assets/img/emotion3.png";
import emotion4 from "../assets/img/emotion4.png";
import emotion5 from "../assets/img/emotion5.png";

export function getEmotionImage (emotionId){
    const emotionImages=[emotion1,emotion2,emotion3,emotion4,emotion5];
    if(emotionId<1||emotionId>emotionImages.length) return null;
    const i = emotionId-1;
    return emotionImages[i];
}