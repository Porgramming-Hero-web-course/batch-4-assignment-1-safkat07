{

    interface Profile {
        name: string;
        age: number;
        email: string
    }

    const updateProfile = (mainObject: Profile, update: Partial<Profile>) => {
        return { ...mainObject, ...update }
    }

    const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));









    //
}