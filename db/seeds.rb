# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
puts "Start Seeding...."
# use faker to create 10 users
User.create([
  {
    username: "Dege",
    password: "dhahabu123",
  },
  {
    username: "Chloe",
    password: "chloe123",
  },

])

Landlord.create([
  {
    user_id: User.all.sample.id,
    name: "Shuku Nickson",
    phone_number: "0724435642",
    email: "shuku@gmail.com",
  },
  {
    user_id: User.all.sample.id,
    name: "Sonjo Kevin",
    phone_number: "0724435642",
    email: "sonjo@gmail.com",
  },
  {
    user_id: User.all.sample.id,
    name: "Sifa Eric",
    phone_number: "0724435642",
    email: "sifa@gmail.com",
  },
  {
    user_id: User.all.sample.id,
    name: "Konde Jonathan",
    phone_number: "0724435642",
    email: "konde@gmail.com",
  },
  {
    user_id: User.all.sample.id,
    name: "Wara Nelson",
    phone_number: "0724435642",
    email: "wara@gmail.com",
  },

])

Apartment.create([
  {
    landlord_id: Landlord.all.sample.id,
    name: "Peace Waters",
    image: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    description: "Entire serviced apartment hosted by HostinGroup 

6 guests3 bedrooms3 beds3.5 baths",
    price: "12000",
  },
  {
    landlord_id: Landlord.all.sample.id,
    name: "The Fedora",
    image: "https://images.unsplash.com/photo-1561228647-c97a76d0fd0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    description: "Water ... that is the key element here and it is nos only represented in the colouf of the carpet, walls, art works in the living room and bathrooms palet´s colours",
    price: "15000",
  },
  {
    landlord_id: Landlord.all.sample.id,
    name: "Platinum Oaks",
    image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    description: "The design of this place just make you have a truly connection with the precious natural resource while at the same time it has all the elements for an unforgettable stay",
    price: "10000",
  },
  {
    landlord_id: Landlord.all.sample.id,
    name: "Safe Homes",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    description: "Accent pendant lighting and rich textures are complemented by subtle yet distinguished designer features. The community's shared spaces further enrich the artful style with a sky deck overlooking Papago,",
    price: "13000",
  },
  {
    landlord_id: Landlord.all.sample.id,
    name: "The Griffin",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    description: "The Griffin is an art gallery by day and VIP lounge by night. Daylight illuminates bright, airy one and two-bedroom homes, where you’ll find expansive quartz countertops and islands, ",
    price: "11000",
  },

])

Room.create([
  {
    apartment_id: Apartment.all.sample.id,
    room_no: "110",

  },
  {
    apartment_id: Apartment.all.sample.id,
    room_no: "111",
  },
  {
    apartment_id: Apartment.all.sample.id,
    room_no: "110",

  },
  {
    apartment_id: Apartment.all.sample.id,
    room_no: "113",

  },
  {
    apartment_id: Apartment.all.sample.id,
    room_no: "114",

  },
  {
    apartment_id: Apartment.all.sample.id,
    room_no: "115",

  },
  {
    apartment_id: Apartment.all.sample.id,
    room_no: "210",
  },
  {
    apartment_id: Apartment.all.sample.id,
    room_no: "211",

  },
  {
    apartment_id: Apartment.all.sample.id,
    room_no: "212",

  },
  {
    apartment_id: Apartment.all.sample.id,
    room_no: "213",

  },

])

Tenant.create([
  {
    room_id: Room.all.sample.id,
    name: "Sande Nickson",
    age: "23",
    gender: "Male",
    contact: "0724435642",
  },
  {
    room_id: Room.all.sample.id,
    name: "Tsofa Kevin",
    age: "43",
    gender: "Female",
    contact: "0724435642",

  },
  {
    room_id: Room.all.sample.id,
    name: "Maisha Eric",
    age: "27",
    gender: "Female",
    contact: "0724435642",

  },
  {
    room_id: Room.all.sample.id,
    name: "Sanita Jonathan",
    age: "40",
    gender: "Male",
    contact: "0724435642",

  },
  {
    room_id: Room.all.sample.id,
    name: "Fikiri Nelson",
    age: "33",
    gender: "Female",
    contact: "0724435642",

  },

])

Payment.create([
  { tenant_id: Tenant.all.sample.id,
   invoice_no: "12345",
   amount_paid: "15000",
   date: "15/09/2022" },
  {
    tenant_id: Tenant.all.sample.id,
    invoice_no: "45677",
    amount_paid: "15000",
    date: "12/09/2022",
  },

  {
    tenant_id: "3",
    invoice_no: "89774",
    amount_paid: "15000",
    date: "22/09/2022",
  },
  {
    tenant_id: "4",
    invoice_no: "23456",
    amount_paid: "15000",
    date: "15/09/2022",
  },

  {
    tenant_id: "2",
    invoice_no: "90875",
    amount_paid: "13000",
    date: "20/09/2022",
  },
  {
    tenant_id: "5",
    invoice_no: "33456",
    amount_paid: "15000",
    date: "11/09/2022",
  },
  {
    tenant_id: Tenant.all.sample.id,
    invoice_no: "88674",
    amount_paid: "14000",
    date: "02/09/2022",
  },
  {
    tenant_id: "6",
    invoice_no: "23406",
    amount_paid: "15000",
    date: "15/09/2022",
  },

])

puts "End of Seeding...."
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
