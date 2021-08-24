import * as fs from "fs";
import * as readLastLines from "read-last-lines";
import { Animal } from './models/animal';

const Store = require('electron-store');
const store = new Store();

let ponies: any[] = [];

const readFile = function (path: string) {
    let previousLine = '';

    readLastLines.read(path, 20)
        .then((lines: string) => {

            let linesInStream = lines.split(/[\r\n]+/g);

            for (let x = 0; x < linesInStream.length; x++) {
                const line = linesInStream[x];

                if (line === undefined) {
                    continue
                }

                // [18:21:50] You smile at the venerable fat Northflash 'M5 +CS'.
                let smileMatch = line.match(/You smile at/g);
                if (smileMatch) {

                    let animal = new Animal();

                    const capsGroups = line.match(/([A-Z])\w+/g);


                    // record 0 is 'You'
                    const ponyName = capsGroups[1];

                    animal.name = ponyName;

                    const givenNameGroups = line.match(/'(.*)'/g);

                    let givenName = '';

                    if (givenNameGroups) {
                        animal.givenName = givenNameGroups[0];
                    } else {
                        //console.log('There were no given name groups found!', givenNameGroups)
                    }

                    animal.setAge(line);

                    // let animal: Animal = { name: ponyName, givenName: givenName  };


                    //console.log("Lines", linesInStream)

                    // find traits
                    for (let y = x + 1; y < linesInStream.length; y++) {
                        const nextLine = linesInStream[y];

                        if (nextLine.includes('It has')) {
                            //   console.log("Trait line", nextLine);

                            animal.setTraits(nextLine)
                        }
                    }

                    //  console.log(x, "Smile", animal);

                    store.set(animal.name, animal);
                    //console.log(store.get(animal.name));

                }
                // console.log(x, linesInStream[x]);
            }
        });
};

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {

    const waitTime = 1000; // 10 seconds wait

    setInterval(function () {
        readFile('C:\\Users\\johnw\\wurm\\players\\jackjones\\logs\\_Event.2021-08.txt');
    }, waitTime);

    renderPonyList();

    const unsubscribe = store.onDidAnyChange(() => {
        renderPonyList();
    });
})

function renderPonyList() {
    let body = document.getElementById('body');
    removeAllChildNodes(body)


    for (const [key, value] of Object.entries(store.store)) {
        // console.log(`${key}`, value);

        let pony: Animal = value as Animal;

        var p = document.createElement('p')
        p.innerText = `${pony.name} ${pony.traits}`;

        body.appendChild(p)
    }
}

function removeAllChildNodes(parent: HTMLElement) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}