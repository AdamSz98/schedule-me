namespace ScheduleMeApi.Profiles
{
    public class UserRegistrationProfile : Profile
    {
        public UserRegistrationProfile()
        {
            CreateMap<UserCreationDto, User>()
                .ForMember(
                    dest => dest.Username,
                    opt => opt.MapFrom(src => src.Username)
                )
                .ForMember(
                    dest => dest.FirstName,
                    opt => opt.MapFrom(src => src.FirstName)
                )
                .ForMember(
                    dest => dest.LastName,
                    opt => opt.MapFrom(src => src.LastName)
                )
                .ForMember(
                    dest => dest.Password,
                    opt => opt.MapFrom(src => src.Password)
                )
                .ForMember(
                    dest => dest.Email,
                    opt => opt.MapFrom(src => src.Email)
                );
        }
    }
}
