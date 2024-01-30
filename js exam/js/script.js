var print = document.getElementById('print');

const country = async () => {

    await fetch('https://restcountries.com/v3.1/all').then((res) => {

        return res.json();

    }).then((res2) => {

        res2.forEach((ele, ind) => {

            const languages = Object.values(ele.languages).join(', ');

            print.innerHTML += `<div
                class="menu-1 d-flex flex-wrap w-100 py-4 align-items-center">
                <div class="f-h4 ps-4">
                    <h4>
                        ${ind + 1}
                    </h4>
                </div>
                <div class="f-img ps-4">
                    <img src="${ele.flags.png}" alt="flag" width="30%">
                </div>
                <div class="f-h2 ps-4">
                    <h2>
                        ${ele.name.common}
                    </h2>
                </div>
                <div class="f-h2-2 ps-5">
                    <h2>
                        ( ${languages} )
                    </h2>
                </div>
            </div>`;

        });

    }).catch((rej) => {

        console.log(rej);

    });
};

country();
