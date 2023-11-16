package config

const (
	UserSesion = "user"

	UserGroup  = "/users"
	UserPost   = "/"
	UserGet    = "/:id"
	UserDelete = "/:id"
	UserGetAll = "/"
	UserUpdate = "/"

	BookingGroup          = "/booking"
	BookingPost           = "/"
	BookingGet            = "/:id"
	BookingGetAll         = "/"
	BookingGetAllByStatus = "/status/:status"
	Approval              = "/approval"

	RoomGroup = "/rooms"
	RoomPost  = "/"
	RoomGet   = "/:id"
)
