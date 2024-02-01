
const show = async () => {

    await fetch('https://jsonplaceholder.typicode.com/users').then((res) => {

        return res.json();

    }).then((res2) => {

        res2.forEach(element => {

            user.innerHTML += `<div class="col-4 p-4">
            <div class="card text-center text-bg-info border-black w-100 p-3" style="width: 18rem;">
                <div class="card-body">
                    <h2 class="card-title cr-h2">${element.name}</h2>
                    <h4 class="card-text cr-h4">-${element.username}</h4>
                    <p class="card-text cr-p">${element.email}</p>
                    <button class="btn btn-warning text-black border border-black" data-bs-toggle="modal" data-bs-target="#userModal${element.id}">View</button>
                    <button class="btn btn-light text-black border border-black" type="button" data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas${element.id}" aria-controls="myOffcanvas${element.id}">Posts</button>
                    <button class="btn btn-success text-black border border-black" type="button" data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas2${element.id}" aria-controls="myOffcanvas2${element.id}">Albums</button>
                </div>
            </div>
        </div>`

            view.innerHTML += `<div class="modal fade overflow-hidden" id="userModal${element.id}" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content bg-warning">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">User Information</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <hr/>
                        </div>
                        <div class="modal-body p-4">
                            <h3 class="md-h4">
                                name :- ${element.name}
                            </h3>
                            <hr />
                            <h4 class="md-h4">
                                username :- ${element.username}
                            </h4>
                            <hr />
                            <h4 class="md-h4">
                                email :- ${element.email}
                            </h4>
                            <hr />
                            <h4 class="md-h4">
                                address :-
                                <h4 class="md-h5 ps-5">
                                    street :- ${element.address.street}
                                </h4>
                                <h4 class="md-h5 ps-5">
                                    suite :- ${element.address.suite}
                                </h4>
                                <h4 class="md-h5 ps-5">
                                    city :- ${element.address.city}
                                </h4>
                                <h4 class="md-h5 ps-5">
                                    zipcode :- ${element.address.zipcode}
                                </h4>
                                <h4 class="md-h5 ps-5">
                                    geo :-
                                    <h4 class="md-h5 ps-5 ms-5">
                                        lat :- ${element.address.geo.lat}
                                    </h4>
                                    <h4 class="md-h5 ps-5 ms-5">
                                        lng :- ${element.address.geo.lng}
                                    </h4>
                                </h4>
                            </h4>
                            <hr />
                            <h4 class="md-h4">
                                phone :- ${element.phone}
                            </h4>
                            <hr />
                            <h4 class="md-h4">
                                website :- ${element.website}
                            </h4>
                            <hr />
                            <h4 class="md-h4">
                                company :-
                                <h4 class="md-h5 ps-5">
                                    name :- ${element.company.name}
                                </h4>
                                <h4 class="md-h5 ps-5">
                                    catchPhrase :- ${element.company.catchPhrase}
                                </h4>
                                <h4 class="md-h5 ps-5">
                                    bs :- ${element.company.bs}
                                </h4>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>`

        });

    }).catch((err) => {

        console.log(err);

    });

};

const posts = async () => {

    await fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => {

        return res.json();

    }).then((res2) => {


        res2.forEach((data) => {

            let userOnePosts = res2.filter(post => post.userId === data.userId);

            const postsHTML = userOnePosts.map((post, ind) => `<div class="w-100 p-2">
                    <h2 class="of-h2">
                        (${ind + 1}) ${post.title}
                    </h2>
                    <h4 class="of-h4">
                        - ${post.body}
                    </h4>
                </div>`).join('');

            post.innerHTML += `<div class="offcanvas offcanvas-end bg-secondary-subtle" data-bs-backdrop="static" tabindex="-1"
            id="myOffcanvas${data.userId}" aria-labelledby="myOffcanvasLabel${data.userId}">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="myOffcanvasLabel${data.userId}">User Posts</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr />
            <div class="offcanvas-body">
                ${postsHTML}
            </div>
        </div>`;

        });

    }).catch((err) => {

        console.log(err);

    });

};

const albums = async () => {

    await fetch(`https://jsonplaceholder.typicode.com/albums`).then((res) => {

        return res.json();

    }).then((res2) => {


        res2.forEach((data) => {

            const userOneAlbums = res2.filter(album => album.userId === data.userId);

            const albumsHTML = userOneAlbums.map((album, ind) => `<div class="w-100 p-2">
                    <h2 class="of-h2">
                        (${ind + 1}) ${album.title}
                    </h2>
                </div>`).join('');

            album.innerHTML += `<div class="offcanvas offcanvas-top bg-success h-75" data-bs-backdrop="static" tabindex="-1"
                id="myOffcanvas2${data.userId}" aria-labelledby="myOffcanvasLabel2${data.userId}">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="myOffcanvasLabel2${data.userId}">User Albums</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr />
                <div class="offcanvas-body">
                    ${albumsHTML}
                </div>
            </div>`;

        });

    }).catch((err) => {

        console.log(err);

    });

};

show();

posts();

albums();
