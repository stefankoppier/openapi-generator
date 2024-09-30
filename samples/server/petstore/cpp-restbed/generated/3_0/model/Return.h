/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI-Generator 7.9.0-SNAPSHOT.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/*
 * Return.h
 *
 * Model for testing reserved words
 */

#ifndef Return_H_
#define Return_H_



#include <memory>
#include <vector>
#include <boost/property_tree/ptree.hpp>
#include "helpers.h"

namespace org {
namespace openapitools {
namespace server {
namespace model {

/// <summary>
/// Model for testing reserved words
/// </summary>
class  Return 
{
public:
    Return() = default;
    explicit Return(boost::property_tree::ptree const& pt);
    virtual ~Return() = default;

    Return(const Return& other) = default; // copy constructor
    Return(Return&& other) noexcept = default; // move constructor

    Return& operator=(const Return& other) = default; // copy assignment
    Return& operator=(Return&& other) noexcept = default; // move assignment

    std::string toJsonString(bool prettyJson = false) const;
    void fromJsonString(std::string const& jsonString);
    boost::property_tree::ptree toPropertyTree() const;
    void fromPropertyTree(boost::property_tree::ptree const& pt);


    /////////////////////////////////////////////
    /// Return members

    /// <summary>
    /// 
    /// </summary>
    int32_t getRReturn() const;
    void setRReturn(int32_t value);

protected:
    int32_t m_r_return = 0;
};

std::vector<Return> createReturnVectorFromJsonString(const std::string& json);

template<>
inline boost::property_tree::ptree toPt<Return>(const Return& val) {
    return val.toPropertyTree();
}

template<>
inline Return fromPt<Return>(const boost::property_tree::ptree& pt) {
    Return ret;
    ret.fromPropertyTree(pt);
    return ret;
}

}
}
}
}

#endif /* Return_H_ */
