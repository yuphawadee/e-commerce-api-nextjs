import React, { createContext, useContext, useState } from 'react';

const PromotionContext = createContext();

export const PromotionProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);

    const hidePromotion = () => setIsVisible(false);
    const showPromotion = () => setIsVisible(true);

    return (
        <PromotionContext.Provider value={{ isVisible, hidePromotion, showPromotion }}>
            {children}
        </PromotionContext.Provider>
    );
};

export const usePromotion = () => useContext(PromotionContext);
