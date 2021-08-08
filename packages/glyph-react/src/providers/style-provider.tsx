import { UIInterface } from 'glyph-core';
import React, { createContext } from 'react';
import { GlyphFlex } from '../components';

const StyleContext = createContext(null);

const GlyphStyleProvider = ({ interface: interfaceValue, children }: { interface: UIInterface; children: any }) => (
    <StyleContext.Provider value={null}>
        <GlyphFlex interface={interfaceValue}>{children}</GlyphFlex>
    </StyleContext.Provider>
);

export default GlyphStyleProvider;
