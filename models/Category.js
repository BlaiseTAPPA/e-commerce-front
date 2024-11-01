import mongoose, { Schema, model, models } from "mongoose";

const categorySchema = new Schema({
    name: { type: String, required: true },
    // Ajoutez d'autres champs de catégorie si nécessaire
}, {
    timestamps: true,
});

let Category;

try {
    // Vérifier si le modèle existe déjà
    Category = models.Category || model('Category', categorySchema);
} catch (error) {
    console.error("Une erreur s'est produite lors de la définition du modèle Category :", error);
}

export { Category };
