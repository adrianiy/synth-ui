import { UIInterface } from 'glyph-core';
import React, { createContext, useContext, useState } from 'react';
import { GlyphFlex } from '../components';

const GlyphStyleContext = createContext({});

export const useGlyphStyle = () => useContext(GlyphStyleContext);

const GlyphStyleProvider = ({ interface: interfaceValue, children }: { interface: UIInterface; children: any }) => {
    const [ glyphInterface, setGlyphInterface ] = useState(interfaceValue || UIInterface.classic);

    return (
        <GlyphStyleContext.Provider value={{ glyphInterface, setGlyphInterface } as any}>
            <GlyphFlex interface={glyphInterface}>{children}</GlyphFlex>
        </GlyphStyleContext.Provider>
    );
};

export default GlyphStyleProvider;
