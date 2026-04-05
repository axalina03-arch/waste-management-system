import { Schema, model } from 'mongoose';

// Define the WasteEntry schema
const wasteEntrySchema = new Schema({
    type: { type: String, required: true }, // Type of waste
    quantity: { type: Number, required: true }, // Quantity of waste
    disposalLocation: { type: String, required: true }, // Location where the waste is disposed
    dateCollected: { type: Date, default: Date.now }, // Date of waste collection
    notes: { type: String } // Additional notes
});

// Create the model
const WasteEntry = model('WasteEntry', wasteEntrySchema);

export default WasteEntry;