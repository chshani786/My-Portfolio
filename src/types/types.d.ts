namespace App {
    export namespace Profile {
        export interface Social {
            name: string;
            url: string;
            icon: string;
        }

        export interface Profile {
            name: string;
            email: string;
            phone: string;
            uk_phone: string;
            location: string;
            bio: string;
            headline: string;
            social: Social[];
            role: string;
            langs: string[];
            frameworks: string[];
        }
    }
}

export default App;
