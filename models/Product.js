import mongoose, { Schema, model, models } from "mongoose";

const productSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: mongoose.Types.ObjectId, ref: 'Category' }, // Référence à la catégorie
    properties: { type: Object },
}, {
    timestamps: true,
});

let Product;

try {
    // Vérifier si le modèle existe déjà
    Product = models.Product || model('Product', productSchema);
} catch (error) {
    console.error("Une erreur s'est produite lors de la définition du modèle Product :", error);
}

export { Product };



/*import mongoose, { Schema, model, models } from "mongoose";

let Product;

try {
    // Vérifier si le modèle existe déjà
    Product = models.Product || model('Product', new Schema({
        title: { type: String, required: true },
        description: String,
        price: { type: Number, required: true },
        category: { type: mongoose.Types.ObjectId, ref: 'Category' },
        properties: { type: Object },
    }, {
        timestamps: true,
    }));
} catch (error) {
    console.error("Une erreur s'est produite lors de la définition du modèle Product :", error);
}

export { Product };*/
