

const menu = () => {

    fetch('https://bhagavadgitaapi.in/chapters/').then((res) => {

        return res.json();

    }).then((res2) => {

        res2.forEach((ele, ind) => {

            accordionFlushExample.innerHTML += `<div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse${ele.chapter_number}" aria-expanded="false" onclick="return allMenu('${ele.chapter_number}')">
                    ${ind + 1} . ${ele.name}
                </button>
            </h2>
            <div id="flush-collapse${ele.chapter_number}" class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample">
                <h3 class="accordion-body" id="petamenu${ele.chapter_number}"></h3>
            </div>
        </div>`

        });

        menuct.innerHTML += `<div class="w-100 p-5 text-center">
            <img src="images/img.webp" alt="img" width="75%">
        </div>`

    }).catch((err) => {

        console.log(err);

    });

};


const allMenu = async (id) => {

    try {

        const res = await fetch(`https://bhagavadgitaapi.in/chapter/${id}/`);

        const res2 = await res.json();

        menuct.innerHTML = '';

        menuct.innerHTML += `<h1 class="ct-h1 my-4">अध्याय :- ${res2.name}</h1>
                            <h2 class="ct-h2 mb-4">श्लोक :- <b>${res2.verses_count}</b></h2>
                            <h3 class="ct-h3 mb-4">अर्थ :- ${res2.meaning.hi}</h3>
                            <h4 class="ct-h4 mb-4">सारांश :- ${res2.summary.hi}</h4>
                            <button class="btn btn-success border-black p-2 me-2 ct-btn" onclick="return hindi('${res2.chapter_number}')">Hindi</button>
                            <button class="btn btn-success border-black p-2 ms-2 ct-btn" onclick="return english('${res2.chapter_number}')">English</button>`;

        for (let i = 1; i <= res2.verses_count; i++) {

            const resSlok = await fetch(`https://bhagavadgitaapi.in/slok/${id}/${i}/`);

            const res2Slok = await resSlok.json();

            document.getElementById(`petamenu${id}`).innerHTML += `<button class="btn" onclick="return petaMenu('${res2Slok.chapter}','${res2Slok.verse}')">( ${res2Slok.verse} ) ${res2Slok.slok}</button>`;

        };

    } catch (err) {

        console.log(err);

    };

};



const petaMenu = (ch, sl) => {

    fetch(`https://bhagavadgitaapi.in/slok/${ch}/${sl}/`).then((res) => {

        return res.json();

    }).then((res2) => {

        menuct.innerHTML = '';

        menuct.innerHTML += `<h1 class="ct-h1-2 my-4">
        श्लोक :- ${res2.slok}
    </h1>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.tej.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; ${res2.tej.ht}
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.siva.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-2">
        &#x21F4; <b>${res2.siva.et}</b>
    </h3>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; <b>${res2.siva.ec}</b>
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.purohit.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; <b>${res2.purohit.et}</b>
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.chinmay.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; ${res2.chinmay.hc}
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.san.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; <b>${res2.san.et}</b>
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.adi.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; <b>${res2.adi.et}</b>
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.gambir.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; <b>${res2.gambir.et}</b>
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.madhav.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; <b>${res2.madhav.sc}</b>
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.anand.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; ${res2.anand.sc}
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.rams.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-2">
        &#x21F4; ${res2.rams.ht}
    </h3>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; ${res2.rams.hc}
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.raman.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-2">
        &#x21F4; ${res2.raman.sc}
    </h3>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; <b>${res2.raman.et}</b>
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.abhinav.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-2">
        &#x21F4; ${res2.abhinav.sc}
    </h3>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; <b>${res2.abhinav.et}</b>
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.sankar.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-2">
        &#x21F4; <b>${res2.sankar.ht}</b>
    </h3>
    <h3 class="ct-h3-2 mb-2">
        &#x21F4; <b>${res2.sankar.sc}</b>
    </h3>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; <b>${res2.sankar.et}</b>
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.jaya.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; <b>${res2.jaya.sc}</b>
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.vallabh.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; ${res2.vallabh.sc}
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.ms.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; ${res2.ms.sc}
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.srid.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; ${res2.srid.sc}
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.dhan.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; ${res2.dhan.sc}
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.venkat.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; ${res2.venkat.sc}
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.puru.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; ${res2.puru.sc}
    </h3>
    <h2 class="ct-h2-2 mt-5 mb-2">
        &#10031; <b>${res2.neel.author}</b>
    </h2>
    <h3 class="ct-h3-2 mb-4">
        &#x21F4; ${res2.neel.sc}
    </h3>`

    }).catch((err) => {

        console.log(err);

    });

}


const hindi = (id) => {

    fetch(`https://bhagavadgitaapi.in/chapter/${id}/`).then((res) => {

        return res.json();

    }).then((res2) => {

        menuct.innerHTML = '';

        menuct.innerHTML += `<h1 class="ct-h1 my-4">
            अध्याय :- ${res2.name}
        </h1>
        <h2 class="ct-h2 mb-4">
            श्लोक :- <b>${res2.verses_count}</b> 
        </h2>
        <h3 class="ct-h3 mb-4">
            अर्थ :- ${res2.meaning.hi}
        </h3>
        <h4 class="ct-h4 mb-4">
            सारांश :- ${res2.summary.hi}
        </h4>
        <button class="btn btn-success border-black p-2 me-2 ct-btn" onclick="return hindi('${res2.chapter_number}')">Hindi</button>
        <button class="btn btn-success border-black p-2 ms-2 ct-btn" onclick="return english('${res2.chapter_number}')">English</button>`

    }).catch((err) => {

        console.log(err);

    });

};


const english = (id) => {

    fetch(`https://bhagavadgitaapi.in/chapter/${id}/`).then((res) => {

        return res.json();

    }).then((res2) => {

        menuct.innerHTML = '';

        menuct.innerHTML += `<h1 class="ct-h1 my-4">
            <b>chapter :- ${res2.translation}</b>
        </h1>
        <h2 class="ct-h2 mb-4">
            <b>verses :- ${res2.verses_count}</b> 
        </h2>
        <h3 class="ct-h3 mb-4">
            <b>meaning :- ${res2.meaning.en}</b>
        </h3>
        <h4 class="ct-h4 mb-4">
            <b>summary :- ${res2.summary.en}</b>
        </h4>
        <button class="btn btn-success border-black p-2 me-2 ct-btn" onclick="return hindi('${res2.chapter_number}')">Hindi</button>
        <button class="btn btn-success border-black p-2 ms-2 ct-btn" onclick="return english('${res2.chapter_number}')">English</button>`

    }).catch((err) => {

        console.log(err);

    });

};


menu();

