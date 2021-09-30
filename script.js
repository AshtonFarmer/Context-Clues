//DOM event listener with DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

    // Creating the H3 accusations
    function createAccusations(name, weapon, location) {
        var accusationContainer = document.querySelector(".accusations");
        for (var i = 0; i < 100; i++) {
            var accusation = document.createElement("h3");
            accusation.className = "accusation";
            accusation.textContent = `Accusation ${i + 1}`;
            accusationContainer.append(accusation);
        }
        // Alerting the accusation
        document.querySelectorAll(".accusation").forEach((accusation, i) => {
            accusation.addEventListener("click", function (e) {
                alert(
                    `Accusation ${i}: I Accuse ${name[i % name.length]}, with the ${weapon[i % weapon.length]
                    } in ${location[i % location.length]}`
                );
            });
        });
    }
    // Global Varriable
    createAccusations(getNames()(), getWeapons()(), getLocations()());





    //Array of Names accused
    function getNames() {
        var names = [
            "Garfeild",
            "Jack",
            "Mark",
            "Suszie",
            "Sean",
        ];
        //Obvously a return function....
        return function () {
            return names;
        };
    }
    //Array of weapons used
    function getWeapons() {
        var weapons = [
            "MachineGun",
            "8 Barell Shotgun",
            "Spy Pen Gun",
            "Science my dude",
            "Donkey with a Rocket",
            "Lightsaber",
            "Laser Rifle",
            "Knife Gun",
            "Tractor with a Mortor",
            "Childrens Gun",
            "Lasagna",
            "Grim Reaper",
            "Cake",
            "Dumbness",
            "Imagination",
            "Swiss Army Gun",
            "Barbed Wire Bat",
            "Video Game",
            "Baby Maker",
            "Annoying dog",
        ];
        //Obvously a return function....
        return function () {
            return weapons;
        };
    }
    //Array of locations of murders
    function getLocations() {
        var locations = [
            "Halo Ring",
            "Azkaban",
            "Dessert",
            "Grand River Shopping Mall",
            "The Past",
            "John's House",
            "Starbucks",
            "Dunkin Donuts",
            "House",
            "Cave",
        ];
        //Obvously a return function....
        return function () {
            return locations;
        };
    }




})