import { useCartStore } from '@/store/useCartStore';
import { Text, View } from 'react-native';

const items = useCartStore((state) => state.items);
const addToCart = useCartStore((state) => state.addItem);

export default function CartScreen() {
    return(
        <View>
            <Text>Cart Screen</Text>
        </View>
    )
}