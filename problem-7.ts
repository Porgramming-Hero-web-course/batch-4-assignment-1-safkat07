{
    //

    class Car {
        constructor(public name: string, public model: string, public year: number) { }

        getCarAge() {
            const recentYear = new Date().getFullYear()
            if (this.year < recentYear) {
                return recentYear - this.year
            }
            return `enter valid date`
        }
    }

    //
}