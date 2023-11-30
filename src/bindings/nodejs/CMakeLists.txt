cmake_minimum_required(VERSION 3.15)
cmake_policy(SET CMP0091 NEW)
cmake_policy(SET CMP0042 NEW)

project(zt-node)

set(LIBZT_ROOT "../../..")
set(ZTS_ENABLE_NODEJS TRUE)

set(NODEJS_DIR ${PROJECT_SOURCE_DIR})

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED On)

add_subdirectory(${LIBZT_ROOT} root)


