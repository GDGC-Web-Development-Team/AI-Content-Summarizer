import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, password, mail } = req.body;

  if (!username || !password || !mail) {
    throw new ApiError(400, "all details must be provided to register");
  }

  const existingUser = await User.findOne({ mail });
  if (existingUser) {
    throw new ApiError(400, "User with this mail already exists");
  }

  const user = await User.create({
    username,
    mail,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "some error occured while registering");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));
});

const login = asyncHandler(async (req, res) => {
  //add login logic here
});

export { registerUser };
