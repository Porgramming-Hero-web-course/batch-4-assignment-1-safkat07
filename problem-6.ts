{

    interface Profile {
        name: string;
        age: number;
        email: string
    }

    const updateProfile = (mainObject: Profile, update: Partial<Profile>) => {
        return { ...mainObject, ...update }
    }

    //
}