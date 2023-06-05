import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import api from "../services/api";
import useData from "./UseData";

export type Genre = {
  id: number;
  name: string;
};

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
