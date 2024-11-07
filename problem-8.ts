{

    type TPerson = {
        name: string;
        age: number;
        email: string;
    };

    const validateKeys = <T extends object, K extends keyof T>(obj: T, keys: K[]): boolean => {

        for (let key of keys) {
            if (key in obj) {
                return true
            }
        }

        return false
    };


    //
}