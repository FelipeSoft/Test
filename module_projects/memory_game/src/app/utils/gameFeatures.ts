export const gameFeatures = {
    fixZero: (time: number) => ( time < 10 ? `0${time}` : time),

    timer: (seconds: number) => {
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60; 

        return `${gameFeatures.fixZero(minutes)}:${gameFeatures.fixZero(remainingSeconds)}`    
    },

    shuffle: (array: Array<any>) => {
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; 
        }

        return array;
    }
}