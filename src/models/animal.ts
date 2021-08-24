export class Animal {
    id: number;
    name: string;
    givenName: string;
    age: string;
    traits: any[] = [];

    setAge(smileText: string) {
        if (smileText.includes('venerable')) {
            this.age = 'Venerable';
        }

        if (smileText.includes('aged')) {
            this.age = 'aged';
        }

        if (smileText.includes('mature')) {
            this.age = 'mature';
        }
        
        if (smileText.includes('young')) {
            this.age = 'young';
        }
    }

    setTraits(traitText: string) {
        if (traitText.includes('It has fleeter movement than normal.')) {
            this.traits = [...this.traits, "FM"];
        }

        if (traitText.includes('It has lightning movement.')) {
            this.traits = [...this.traits, "LM"];
        }

        if (traitText.includes('It has very strong leg muscles.')) {
            this.traits = [...this.traits, "SL"];
        }

        if (traitText.includes('It has a strong body.')) {
            this.traits = [...this.traits, "SB"];
        }

        if (traitText.includes('It looks unusually strong and healthy.')) {
            this.traits = [...this.traits, "SH"];
        }

        if (traitText.includes('It has a certain spark in its eyes.')) {
            this.traits = [...this.traits, "CS"];
        }

        if (traitText.includes('It has strong legs.')) {
            this.traits = [...this.traits, "SL"];
        }

        if (traitText.includes('It is easy on its gear.')) {
            this.traits = [...this.traits, "EG"];
        }

        if (traitText.includes('It seems accustomed to water.')) {
            this.traits = [...this.traits, "AW"];
        }

        if (traitText.includes('It has been bred in captivity.')) {
            this.traits = [...this.traits, "BC"];
        }

        

        
    /*
    [21:40:18] Horses like this one have many uses.
    [21:40:18] She is very strong and has a good reserve of fat.
    [21:40:18] This creature could use some grooming.
    [21:40:18] It has fleeter movement than normal. It has lightning movement.  It seems accustomed to water. It has been bred in captivity. 
    [21:40:18] This creature has a total of 55 trait points.
    [21:40:18] They are not hungry.
    [21:40:18] You can groom them again now.
    [21:40:18] Its colour is white.
    [21:40:18] Her mother is the venerable fat Lilylightning. Her father is the venerable fat Brisksage 'M4'. 

    [21:36:42] You smile at the aged fat Rythmiron.
    [21:36:45] Horses like this one have many uses.
    [21:36:45] He is very strong and has a good reserve of fat.
    [21:36:45] This creature could use some grooming.
    [21:36:45] It has fleeter movement than normal. It has lightning movement. It has very strong leg muscles. It seems accustomed to water. It has been bred in captivity. 
    [21:36:45] This creature has a total of 55 trait points.
    [21:36:45] They are not hungry.
    [21:36:45] You can groom them again now.
    [21:36:45] Its colour is appaloosa.
    [21:36:45] His mother is the venerable fat Wildhop 'F5 +CS'. His father is the venerable fat Northflash 'M5 +CS'.

    */
    }
}