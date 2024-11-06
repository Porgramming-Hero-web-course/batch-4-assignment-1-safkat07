{
    const countWordOccurrences = (sentense: string, word: string): number => {
        let count = 0;
        const newStr = sentense.toLowerCase().split(/[ !]/).filter(item => item !== '')

        for (let i = 0; i < newStr.length; i++) {
            if (newStr[i] === word) {
                count = count + 1
            }
        }
        return count;

    }

    console.log(countWordOccurrences("TypeScript is great. I love success", "success"))



    //
}