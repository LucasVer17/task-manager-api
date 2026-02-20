import { ResourceOptions } from 'adminjs';

export const userResourceOptions: ResourceOptions = {
    navigation: 'User Management',
    editProperties: ['name', 'role'],
    listProperties: ['id', 'name', 'role'],
    filterProperties: ['name', 'role', 'createdAt', 'updatedAt'],
}