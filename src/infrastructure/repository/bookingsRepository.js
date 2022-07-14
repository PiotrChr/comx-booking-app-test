import BookingsStorage from '../storage/bookingsStorage';

const storage = new BookingsStorage();

export const findAll = async (props) => storage.bookingFindAll(props);

export const findById = async (props) => storage.bookingFindById(props);

export const findByUser = async (props) => storage.bookingFindByUser(props);

export const findByEntity = async (props) => storage.bookingFindByEntity(props);

export const createNewBooking = async (props) => storage.createNewBooking(props);
