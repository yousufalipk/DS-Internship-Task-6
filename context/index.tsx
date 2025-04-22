"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Item {
    title: string;
    by: string;
    imageUrl: string;
    discountedPrice: number;
    originalPrice: number;
    hrs: number,
    authorPicUrl: string,
    lessons: number,
    ratings: number
}

interface UserContextType {
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
    cart: Boolean;
    setCart: React.Dispatch<React.SetStateAction<Boolean>>;
    promotion: Boolean;
    setPromotion: React.Dispatch<React.SetStateAction<Boolean>>;
    handleRemoveItem(index: number): void
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<Item[]>([]);
    const [cart, setCart] = useState<Boolean>(false);
    const [promotion, setPromotion] = useState<Boolean>(true);

    const item1 = {
        title: 'The power of Accountablity Complete Begineers Guide',
        by: 'Claudia Pruitt',
        imageUrl: 'https://res.cloudinary.com/du6yj0y8r/image/upload/v1745313786/courseWebsite/yfsacyfsd7iiqmv5mlql.png',
        discountedPrice: 149.00,
        originalPrice: 180.00,
        hrs: 5,
        authorPicUrl: 'https://res.cloudinary.com/du6yj0y8r/image/upload/v1745319951/courseWebsite/ucfepb0kvehk8ddd3afx.png',
        lessons: 10,
        ratings: 4.8
    }

    const item2 = {
        title: 'The power of Accountablity Complete Begineers Guide',
        by: 'Claudia Pruitt',
        imageUrl: 'https://res.cloudinary.com/du6yj0y8r/image/upload/v1745313786/courseWebsite/slfbflnkrjbzvzamurtd.png',
        discountedPrice: 149.00,
        originalPrice: 180.00,
        hrs: 5,
        authorPicUrl: 'https://res.cloudinary.com/du6yj0y8r/image/upload/v1745319951/courseWebsite/ucfepb0kvehk8ddd3afx.png',
        lessons: 10,
        ratings: 4.8
    }

    useEffect(() => {
        setItems(prevItems => [...prevItems, item1, item2]);
    }, [])

    const handleRemoveItem = (index: number) => {
        setItems(prevItems => prevItems.filter((_, i) => i !== index));
    };

    return (
        <UserContext.Provider value={{ items, setItems, handleRemoveItem, cart, setCart, promotion, setPromotion }}>
            {children}
        </UserContext.Provider>
    );
};
