import React from "react";
import Provider from "./src/components/Provider";
export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>;
