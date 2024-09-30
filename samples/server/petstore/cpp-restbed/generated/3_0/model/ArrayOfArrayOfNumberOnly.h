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
 * ArrayOfArrayOfNumberOnly.h
 *
 * 
 */

#ifndef ArrayOfArrayOfNumberOnly_H_
#define ArrayOfArrayOfNumberOnly_H_



#include <vector>
#include <memory>
#include <vector>
#include <boost/property_tree/ptree.hpp>
#include "helpers.h"

namespace org {
namespace openapitools {
namespace server {
namespace model {

/// <summary>
/// 
/// </summary>
class  ArrayOfArrayOfNumberOnly 
{
public:
    ArrayOfArrayOfNumberOnly() = default;
    explicit ArrayOfArrayOfNumberOnly(boost::property_tree::ptree const& pt);
    virtual ~ArrayOfArrayOfNumberOnly() = default;

    ArrayOfArrayOfNumberOnly(const ArrayOfArrayOfNumberOnly& other) = default; // copy constructor
    ArrayOfArrayOfNumberOnly(ArrayOfArrayOfNumberOnly&& other) noexcept = default; // move constructor

    ArrayOfArrayOfNumberOnly& operator=(const ArrayOfArrayOfNumberOnly& other) = default; // copy assignment
    ArrayOfArrayOfNumberOnly& operator=(ArrayOfArrayOfNumberOnly&& other) noexcept = default; // move assignment

    std::string toJsonString(bool prettyJson = false) const;
    void fromJsonString(std::string const& jsonString);
    boost::property_tree::ptree toPropertyTree() const;
    void fromPropertyTree(boost::property_tree::ptree const& pt);


    /////////////////////////////////////////////
    /// ArrayOfArrayOfNumberOnly members

    /// <summary>
    /// 
    /// </summary>
    std::vector<std::vector<double>> getArrayArrayNumber() const;
    void setArrayArrayNumber(std::vector<std::vector<double>> value);

protected:
    std::vector<std::vector<double>> m_ArrayArrayNumber;
};

std::vector<ArrayOfArrayOfNumberOnly> createArrayOfArrayOfNumberOnlyVectorFromJsonString(const std::string& json);

template<>
inline boost::property_tree::ptree toPt<ArrayOfArrayOfNumberOnly>(const ArrayOfArrayOfNumberOnly& val) {
    return val.toPropertyTree();
}

template<>
inline ArrayOfArrayOfNumberOnly fromPt<ArrayOfArrayOfNumberOnly>(const boost::property_tree::ptree& pt) {
    ArrayOfArrayOfNumberOnly ret;
    ret.fromPropertyTree(pt);
    return ret;
}

}
}
}
}

#endif /* ArrayOfArrayOfNumberOnly_H_ */
