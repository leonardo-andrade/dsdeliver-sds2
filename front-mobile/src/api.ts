import axios from "axios";

const API_URL = 'http://192.168.0.108:8080';
// ou usar o endereço da Heroku "https"

export function fetchOrders() {
    return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
} 