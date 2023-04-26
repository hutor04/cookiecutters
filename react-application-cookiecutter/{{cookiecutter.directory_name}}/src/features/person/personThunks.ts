import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiRoutes from '../../apiRoutes';
import translateApiPerson from "./translateApiPerson";


export const fetchPersonById = createAsyncThunk(
  "person/fetchPersonById",
  async (id: number | undefined) => {
    if (!id) return undefined;

    const response = await axios.get(`${apiRoutes.person(id.toString())}`);

    if (!response.data) return;

    return translateApiPerson(response.data);
  }
);