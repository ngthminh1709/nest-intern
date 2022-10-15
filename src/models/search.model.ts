/* eslint-disable prettier/prettier */
import { Document, Schema, Types } from 'mongoose';

const SearchSchema = new Schema(
  {
    Type: { type: Number },
    SolrID: { type: String },
    ID: { type: String },
    Title: { type: String },
    STT: { type: Number },
    TotalDoanhNghiep: { type: Number },
  },
  {
    timestamps: true,
    collection: 'companies',
  },
);

export { SearchSchema };

export interface Search extends Document {
  Type: number;
  SolrID: string;
  ID: number;
  Title: string;
  STT: string;
  TotalDoanhNghiep: number;
}
