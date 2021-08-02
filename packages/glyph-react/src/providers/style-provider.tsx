import React, { createContext } from 'react';
import { GlyphFlex } from '../components';

const StyleContext = createContext(null);

const GlyphStyleProvider = ({ children }: { children: any }) => (
    <StyleContext.Provider value={null}>
        <GlyphFlex>{children}</GlyphFlex>
    </StyleContext.Provider>
);

export default GlyphStyleProvider;
