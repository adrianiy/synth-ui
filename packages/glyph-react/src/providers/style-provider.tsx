import { UIInterface, UITheme } from 'glyph-core';
import React, { createContext, useContext, useState } from 'react';
import { GlyphStyle } from '../components';

const GlyphStyleContext = createContext({});

export const useGlyphStyle = () => useContext(GlyphStyleContext);

const GlyphStyleProvider = ({
    interface: interfaceValue,
    theme,
    children,
}: {
    interface: UIInterface;
    theme: UITheme;
    children: any;
}) => {
    const [ glyphInterface, setGlyphInterface ] = useState(interfaceValue || UIInterface.classic);
    const [ glyphTheme, setGlyphTheme ] = useState(theme || 'light');

    return (
        <GlyphStyleContext.Provider value={{ glyphInterface, glyphTheme, setGlyphInterface, setGlyphTheme } as any}>
            <GlyphStyle interface={glyphInterface} theme={glyphTheme}>
                {children}
            </GlyphStyle>
        </GlyphStyleContext.Provider>
    );
};

export default GlyphStyleProvider;
