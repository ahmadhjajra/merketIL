    //////////////////////replace task with the relevant name of input
    let name = $("input#partname").val();
    //////////////////////replace Priorty-options selector name
    let brand = $("#brand").val();
	let os = $("#OS").val();
	let model = $("input#model").val();
	let price = $("input#price").val();
	let url = $("input#picurl").val();

    const db = firebase.firestore();
    db.collection("shop_list").add({

            //replcae the fields to as the colection in the database
			OS: os,
			brand: brand,
            model_name: name,
			pic_link: url,
			price: price
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });