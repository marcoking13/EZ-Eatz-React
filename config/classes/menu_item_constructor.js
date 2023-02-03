class Item {

  constructor(name,id,description,price,image,calories,ingredients,options,addons){
    this.name = name;
    this.id = id;
    this.options = options;
    this.ingredients = ingredients;
    this.addons = addons;
    this.image = image;
    this.calories = calories,
    this.price = price,
    this.description = description
  }

}
module.exports = Item;
