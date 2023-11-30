cmake_minimum_required(VERSION 3.15)
cmake_policy(SET CMP0091 NEW)
cmake_policy(SET CMP0042 NEW)

project(zt-node)

set(LIBZT_ROOT "../../..")
set(ZTS_ENABLE_NODEJS TRUE)
set(CMAKE_CXX_STANDARD 20)

set(NODEJS_DIR ${PROJECT_SOURCE_DIR})

add_subdirectory(${LIBZT_ROOT} root)


