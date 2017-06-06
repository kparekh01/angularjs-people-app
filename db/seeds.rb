50.times do
  Person.create(
    name: Faker::Name.name,
    bio: Faker::Hipster.sentences
  )
end
