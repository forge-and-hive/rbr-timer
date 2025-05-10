"use server"
import { User } from "@/models";
import bcrypt from "bcryptjs";

export const register = async (values: any) => {
  const { email, password, name } = values;

  try {
    const userFound = await User.findOne({ email });
    if(userFound){
        return {
            error: 'Email already exists!'
        }
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();

    return { success: true };
  } catch (e) {
    console.log(e);
    return { error: "An error occurred during registration" };
  }
}
